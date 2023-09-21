#server
FROM php:8.1-apache
COPY --from=composer:2.5 /usr/bin/composer /usr/local/bin/composer
RUN apt-get update && apt-get install -y --no-install-recommends nodejs npm libzip-dev && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install zip mysqli pdo_mysql
RUN a2enmod rewrite ssl
#vendor / node_modules
COPY composer.json composer.lock package.json package-lock.json .
RUN composer install --no-autoloader --no-dev && \
    npm install
#app
COPY --chmod=777 . .
RUN composer dump-autoload -o && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache && \
    php artisan storage:link && \
    npm run build
EXPOSE 80