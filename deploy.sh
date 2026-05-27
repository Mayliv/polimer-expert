#!/bin/bash
set -e

SERVER="138.16.162.119"
USER="root"
APP_DIR="/opt/polimer-expert"

echo "=== Деплой на $SERVER ==="

# 1. Собираем фронтенд локально
echo "--- Сборка фронтенда ---"
npm ci
BASE_URL=/ npm run build -- --config vite.static.config.ts

# 2. Синхронизируем проект на сервер
echo "--- Синхронизация файлов ---"
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude 'dist' \
  --exclude 'dist-static' \
  --exclude '.env' \
  ./ "$USER@$SERVER:$APP_DIR/"

# 3. Копируем собранный фронтенд
rsync -avz dist-static/ "$USER@$SERVER:$APP_DIR/dist-static/"

# 4. Команды на сервере
ssh "$USER@$SERVER" bash << 'ENDSSH'
  set -e
  cd /opt/polimer-expert

  # Устанавливаем Docker если нет
  if ! command -v docker &> /dev/null; then
    apt-get update -q
    curl -fsSL https://get.docker.com | sh
  fi

  # Первый запуск — создаём .env
  if [ ! -f .env ]; then
    cp .env.example .env
    echo ""
    echo "!!! Заполни /opt/polimer-expert/.env и запусти deploy.sh снова !!!"
    exit 1
  fi

  # Копируем статику фронтенда в нужное место
  mkdir -p /opt/polimer-expert/frontend_dist
  cp -r dist-static/. /opt/polimer-expert/frontend_dist/

  # Пересобираем и поднимаем контейнеры
  docker compose pull nginx postgres 2>/dev/null || true
  docker compose up -d --build cms postgres nginx

  # Ждём старта CMS
  echo "--- Ждём запуска Payload CMS (~30 сек) ---"
  sleep 30
  docker compose ps

  echo ""
  echo "=== Готово ==="
  echo "Сайт:    https://propolimerexpert.ru"
  echo "CMS:     https://cms.propolimerexpert.ru/admin"
ENDSSH
