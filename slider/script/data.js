//时间间隔 毫秒
var _interval=5000;

var data=[
    {text:"Zabbix",url:"http://zabbix.lenovo.com"},
	
    {text:"业务监控",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/a27bb230-bbf4-11e8-bb69-a719c2a8c19e?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-30m%2Cinterval%3A'1m'%2Cmode%3Aquick%2Ctimezone%3AAsia%2FShanghai%2Cto%3Anow))"},
	
    {text:"Kong",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/c82bfa20-b71d-11e8-9865-0384774af96b?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-30m%2Cinterval%3A'1m'%2Cmode%3Aquick%2Ctimezone%3AAsia%2FShanghai%2Cto%3Anow))"},
	
    {text:"CSDP",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/92ce6e80-1c4a-11e8-8a6b-67758e81107f?_g=(refreshInterval%3A(display%3A'30%20seconds'%2Cpause%3A!f%2Csection%3A1%2Cvalue%3A30000)%2Ctime%3A(from%3Anow-1h%2Cmode%3Aquick%2Cto%3Anow))"},
	
    {text:"ESD地图",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/bba77c30-d892-11e7-a22a-c31027b1f3ac?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cmode%3Aquick%2Cto%3Anow))"},
	
    {text:"Win30分钟",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/34ecae50-1865-11e8-96b7-2393f514b3b6?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-30m%2Cinterval%3A'1m'%2Cmode%3Aquick%2Ctimezone%3AAsia%2FShanghai%2Cto%3Anow))"},

    {text:"Linux30分钟",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/05eac320-3328-11e8-8a50-591632764dae?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-30m%2Cinterval%3A'1m'%2Cmode%3Aquick%2Ctimezone%3AAsia%2FShanghai%2Cto%3Anow))"},

    {text:"慢页面次数",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/7d08dca0-22c3-11e8-8ed4-c59c3afc651d?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cinterval%3A'1m'%2Cmode%3Aquick%2Ctimezone%3AAsia%2FShanghai%2Cto%3Anow))"},

    {text:"当天趋势",url:"http://kibana.elk.lenovo.com:9010/app/kibana#/dashboard/42eca2d0-eb8d-11e7-b36b-a7709ceee47b?_g=(refreshInterval%3A(display%3A'1%20minute'%2Cpause%3A!f%2Csection%3A2%2Cvalue%3A60000)%2Ctime%3A(from%3Anow%2Fd%2Cmode%3Aquick%2Cto%3Anow%2Fd))"}
];