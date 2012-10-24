# certs
you will need to generate your own https certs. These files will be ignored in git :)
This is taken care of for you if you run ../install.sh

in this directory:

    openssl genrsa -out privatekey.pem 1024;
    openssl req -new -key privatekey.pem -out certrequest.csr;
    openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem;
    