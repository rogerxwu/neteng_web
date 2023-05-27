# NetEng Web

Purpose: Vistualize all nodes and links in the network


Frontend: react
Backend: https://demo.nautobot.com/



npm install d3@^5.5.0      # if you don't have d3 already
npm install react@^16.4.1  # if you don't have react already
npm install react-dom@16.14.0
npm install react-d3-graph


Need to modify index.js to match react v16



### Test nautobot graphql api
You can test the graphql api from https://demo.nautobot.com/api/graphql/
```
xianwu@rwus-macbook ~ % curl -X POST \
-H "Authorization: Token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
https://demo.nautobot.com/api/graphql/ \
-d '{"query":" query {sites{name}}"}'
{"data":{"sites":[{"name":"AMS01"},{"name":"ANG01"},{"name":"ATL01"},{"name":"ATL02"},{"name":"AZD01"},{"name":"BKK01"},{"name":"BRE01"},{"name":"CAN01"},{"name":"CDG01"},{"name":"CDG02"},{"name":"DEL01"},{"name":"DEN01"},{"name":"DFW"},{"name":"DFW01"},{"name":"DFW02"},{"name":"DXB01"},{"name":"DXB02"},{"name":"FRA01"},{"name":"HKG01"},{"name":"HND01"},{"name":"HND02"},{"name":"HOU"},{"name":"ICN01"},{"name":"Jersey City"},{"name":"JFK01"},{"name":"LAX01"},{"name":"LAX02"},{"name":"LHR01"},{"name":"LHR02"},{"name":"New York City"},{"name":"NYM01"},{"name":"ORD01"},{"name":"ORD02"},{"name":"PEK01"},{"name":"PEK02"},{"name":"PVG01"},{"name":"PVG02"},{"name":"SIN01"},{"name":"SLC01"},{"name":"Weehawken"}]}}%
```

Or just spin up a docker instance running on your laptop
```
xianwu@rwus-macbook ~ % curl -X POST \
-H "Authorization: Token 1cefca6e9c8d95cfa4f8ecef2086461366f0e8a2" \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
http://localhost:8080/api/graphql/ \
-d '{"query":" query {sites{name}}"}'
{"data":{"sites":[{"name":"hbo2"},{"name":"sac1"},{"name":"wen1"}]}}%  
```

When you test it from Chrome, use the following cmd to disable CORS check
```
open -a Google\ Chrome --args --disable-web-security --disable-gpu --user-data-dir=/chromeTemp
```