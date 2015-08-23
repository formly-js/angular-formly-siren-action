# angular-formly-siren-action
angular-formly-siren-action is an angular-formly plugin that will enable to forward [Siren](https://github.com/kevinswiber/siren) action payloads directly to angular-formly.


The usage is extremely simple:

```javascript
//Import the function
import sirenFieldTransformer from 'angular-formly-siren-action'


//Pass it into the fieldTransform parameter
{
  fieldTransform: sirenFieldTransformer
}
```

The actual mapping is very simple
```javascript
export default function mapSirenToFormly(action) {
  return action.fields.map(field => {
    return {
      type: action.name + '.' + field.type,
      key: field.name,
      defaultValue: field.value,
      templateOptions: {
        label: field.title || field.name
      }
    }
  })
}
```

And it is based on [Siren fields specification](https://github.com/kevinswiber/siren#fields-1)

Feel free to file an issue or a Pull request if something can be improved!
