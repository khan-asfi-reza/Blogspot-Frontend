```jsx
import {Container} from "components/UI/Layout/Container";
import {Input} from "./Form";

<Container>
    <div className={"grid place-items-center"}>
        Hello World
    </div>
</Container>
```

HTML Section Alternative with framer motion support

```html
<section></section>
```

```jsx
import {Section} from "./Layout";

<Section>
...Your Content
</Section>
```

Framer Motion Animation variants

```jsx
import {Section} from "./Layout";

<Section initial={{x: -1000}} animate={{x: 0}} transition={{duration: 1}}>
...Your Content
</Section>
```