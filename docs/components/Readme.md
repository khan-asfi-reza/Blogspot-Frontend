```jsx
import {Container} from "components/UI/Layout/Container";
import {Input} from "./Form";

<Container>
    <div className={"grid place-items-center"}>
        Hello World
    </div>
</Container>
```
Section - HTML `section` alternative with framer motion support

# Section

```jsx
import {Section} from "@UI/Layout";
// Animate using framer motion props
<Section initial={{x: -1000}} animate={{x: 0}}>
    <p> Hello There </p>
</Section>
```

# Div

Div - HTML `div` alternative with framer motion support

```jsx
import {Div} from "@UI/Layout";
// Animate using framer motion props
<Div initial={{x: -1000, opacity: 0, rotate: "45deg"}} 
     animate={{x: 0, opacity: 1, rotate: "0deg"}}>
    <p> Hello There </p>
</Div>
```

# Center

Center - Centers a content

```jsx
import {Center} from "@UI/Layout";

<Center>
    <p> Hello There </p>
</Center>
```

# Row

Row Semantic Tag to identify a row in a grid or flex system

Row uses `Div @UI/Layout`

```jsx
import {Row} from "@UI/Layout";

<div className={"grid gap-4 grid-rows-2"}>
    <Row className={"bg-red-400 text-white p-2"}>
        <p> Hello There, this is  row 1</p>
    </Row>

    <Row className={"bg-orange-400 text-white p-2"}>
        <p> Hello There, this is  row 2</p>
    </Row>
</div>
```

# Col

Col Semantic Tag to identify a row in a grid or flex system

Col uses `Div @UI/Layout`

```jsx
import {Col} from "@UI/Layout";

<div className={"grid gap-x-4 grid-cols-2"}>
    <Col className={"p-2 text-white bg-emerald-500"}>
        <p> Hello There, this is  row 1</p>
    </Col>
    <Col className={"p-2 text-white bg-emerald-500"}>
        <p> Hello There, this is  row 2</p>
    </Col>
</div>
```

### Above elements have the same props as ```<Section/>```