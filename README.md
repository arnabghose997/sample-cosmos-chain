## Sample Ignite Scaffolded Chain

The chain has been scaffolded using the following command:

```
ignite scaffold chain github.com/earth/mumbai
```

Build the chain:

```
ignite chain build
```

To execute custom module's sample transaction (`MsgCreateSchema`):

```
mumbaid tx mumbai create-schema '{"authored":"did:hs:123","schema":{"properties":{"emailAddress":{"type":"string","format":"some format"}}}}' --from alice
```
