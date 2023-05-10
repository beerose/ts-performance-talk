// ref: https://github.com/microsoft/TypeScript/issues/46783

class Col<TParams> {
  public withRequiredPrimitiveParam<TName extends string>(_name: TName) {
    return undefined! as Col<TParams & { readonly [K in TName]: any }>;
    // return undefined! as Col<TParams & Record<TName, any>>;
  }
}

const _ = new Col()
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value")
  .withRequiredPrimitiveParam("value"); // Hits stack limit
