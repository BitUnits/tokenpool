var web3_gastracker = 'https://web3.gastracker.io';


var redisInterface = require('./lib/redis-interface')
var peerInterface = require('./lib/peer-interface')

var tokenInterface = require('./lib/token-interface')

var poolConfig = require('./pool.config').config
var accountConfig = require('./account.config').accounts;

var Web3 = require('web3')
var web3 = new Web3()
 web3.setProvider(web3_gastracker)

var pool_env = "main"

async function init()
{

   await redisInterface.init()
   await tokenInterface.init(redisInterface,web3,accountConfig,poolConfig,pool_env)

   await peerInterface.init(web3,accountConfig,poolConfig,redisInterface,tokenInterface,pool_env) //initJSONRPCServer();

  await peerInterface.cleanRedisData();

  process.exit()
}

init();
