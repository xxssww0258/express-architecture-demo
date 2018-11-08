module.exports = {
  apps: [{
    "name": "app",
    "script": "bin/www",
    "watch": false, // <= true  有bug
    "merge_logs": true,
    // "args"        : ["--toto=heya coco", "-d", "1"],
    // "node_args"   : "--harmony",
    // "cwd"         : "/this/is/a/path/to/start/script",
    // "error_file" : "./examples/child-err.log",
    // "out_file"   : "./examples/child-out.log",
    // "pid_file"   : "./examples/child.pid"
    // "instances"  : "max",
    // "exec_mode"  : "cluster",//  集群模式 默认是fork 生产才用cluster
    "env": { //<=  默认跑这个
      "NODE_ENV": "development",
      "BASE_URL": "development"
    },
    "env_development": {
      "NODE_ENV": "development",
      "BASE_URL": "development"
    },
    "env_production": {
      "NODE_ENV": "production",
      "BASE_URL": "production"
    }
  }]
}