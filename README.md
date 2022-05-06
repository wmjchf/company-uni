# dogc-uni

1、微信小程序`::v-deep`不生效。

```
@Component({
  // @ts-ignore
  options: {
    styleIsolation: "shared",
  },
})
export default class DogcLogin extends Vue {}
```
