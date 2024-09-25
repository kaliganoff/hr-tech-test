# hr-tech-test

Это тестовое задание — приложение в тематике HR-tech.

## Запуск

1. Пожалуйста, склонируйте репозиторий с помощью команды:
   git clone https://github.com/kaliganoff/hr-tech-test.git
2. Установите зависимости: npm install
3. Запустите девсервер: npm run dev

Использовать мутацию refreshToken с этим API бессмысленно, потому что access token действует гораздо дольше. Таким образом, когда access token устареет, refresh token также уже давно будет устаревшим.
