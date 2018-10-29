curl https://sh.rustup.rs -sSf | sh
sudo apt-get install -y gcc g++ libssl-dev openssl libudev-dev pkg-config file make
wget https://releases.parity.io/v2.0.8/x86_64-unknown-linux-gnu/parity
chmod +x parity
mv parity /bin/parity
