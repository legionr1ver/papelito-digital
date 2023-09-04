#Preparing serv with tools
FROM php:8.1-apache
COPY --from=composer:2.5 /usr/bin/composer /usr/local/bin/composer
RUN apt-get update && apt-get install -y nodejs npm libzip-dev && docker-php-ext-install zip mysqli pdo_mysql
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf && sed -ri -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN a2enmod rewrite
RUN service apache2 restart
#Installing the app
COPY . /var/www/html
RUN chmod -R 777 /var/www/html/storage
RUN composer install
RUN npm install
RUN npm run build
EXPOSE 80