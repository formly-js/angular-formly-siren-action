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
