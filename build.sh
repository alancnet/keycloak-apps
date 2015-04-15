OLDPWD=$PWD
BASEDIR=$(dirname $0)
cd $BASEDIR
docker build -t keycloak-apps .
cd $OLDPWD
