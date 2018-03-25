Project to reproduce https://github.com/akameco/extract-react-intl-messages/issues/14#issuecomment-375897964

### Steps

```
npm install
npm run extractMessages
```

And you should see:

```
RangeError: Invalid string length
    at JSON.stringify (<anonymous>)
    at then.str (/Users/matejprokop/dev/extract-react-intl-messages-14-repro/node_modules/write-json-file/index.js:40:22)
    at <anonymous>
```