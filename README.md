# Adam's Node.js learning repo

This is just a test repo for me to learn node.js by implementing all of the basic building blocks needed to create a modern web framework (https, auth, modules, etc)

# Install

    # install this project
    git clone git://github.com/atomantic/nodeproject.git;
    cd nodeproject;

If you don't yet have node and npm installed:

    ./install.sh -n

If you already have it:

    ./install.sh    


# Run

    export NODE_ENV=development
    node server.js
    curl -k https://localhost:8000