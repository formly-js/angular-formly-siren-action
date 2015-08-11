import _ from 'lodash'

export default function mapSirenToFormly(fields)
  {
    return _(this.action.fields).map(field => {
      return {
        type: this.action.name + '.' + field.type,
        key: field.name,
        templateOptions: {
          label: field.name
        }
      }
    }).value()
  }
