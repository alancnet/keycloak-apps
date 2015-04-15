FROM httpd

COPY ./httpd.conf /usr/local/apache2/conf/httpd-add.conf
RUN cat /usr/local/apache2/conf/httpd-add.conf >> /usr/local/apache2/conf/httpd.conf
COPY ./htdocs /usr/local/apache2/htdocs

