#!/bin/sh

# install node?
NODE=false;

usage="usage: $0 -n {optional, tells the installer to also install node}";

while [ $# -gt 0 ]
do
    case "$1" in
      -n)  NODE=true; shift;;
      --)  shift; break;;
      -*)
      	echo $usage;
    	exit 1;;
      *)  break;; #terminate while loop
    esac
    shift
done

if [ $NODE == true ]
    then
        git clone git://github.com/ry/node.git /tmp/node
        cd /tmp/node
        ./configure
        make
        sudo make install;
        # back to project dir
        cd -;
fi

# generate certs
cd certs;
openssl genrsa -out privatekey.pem 1024;
openssl req -new -key privatekey.pem -out certrequest.csr;
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem;
cd -;
# Bower is a UI package manager: http://twitter.github.com/bower/
npm install -g bower;
# install node modules
npm install;
# install UI packages
bower install;
