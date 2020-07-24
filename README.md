# grass-roots-react
A state-full react library

# grass-roots-react is UNDER CONSTRUCTION
## The docs below are far from complete, check in everynow and then to see where it's at.
## See the quick start guide to give it a try, however it is limited and currently has no support =(

# quick start guide

### Install
`npm install grass-roots-react`

### Use
`import { Container, Button } from 'grass-roots-react'`

`function handleClick(){
  console.log("CLICK")
}`

`<Container>
  <Button 
    text='press'
    color='rgb(255,125,125)'
  />
  <Button
    text='console log a "click"'
    color='#000'
    skin='flat'
    onClick={handleClick}
  />
<Container/>`

# Introduction
grass-roots-react is a stateful library. Most components have internal states that allow the component to function independently from a global store or parent container logic. This allows for drag and drop, copy and paste components that will work anywhere in your build. The downside is a little bit of prop drilling, but we have designed our components to minimise this. 

## Grass roots?
Yeah, grass roots. We're leaveraging lift up state (with a few custom hooks, more on that later) on most of our elements so that data flows both ways, connecting your app from the ground-up as well as the top down. You'll probably need a global store for complex apps, but until that: no need! 

# Wrappers and Components
There are two types of Groot elements.
- Wrappers:
    wrap around existing elements and provide functionality or styling.
    These will always wrap existing Groot components and wrappers, your own elements or html elements.
    <Wrapper>
      <WrappedComponent/>
      <Wrapper>
        <p>this is also wrapped</p>
      <Wrapped/>
    </Wrapper>
  
- Components:
  stand alone components <Component/>
  
See the <a href='#'>docs</a> for prop options that you can pass to each element.

# liftUpState Hook
You can leverage the Hook useLiftState() to get state from any child componenet; provided that the component has state designed to be hooked into of course

```
const [ liftedStates, liftUpState ] = useLiftState();

<ResultContainer {...liftUpState}> 
  <DataTemplate/>
<ResultContainer/>
```
Here we're accessing the internal state of the result container, you can now use `liftedStates.setResultContainer(<data>)`
to set the data in the result container. Here, <DataTemplate/> is a component you've created that displays the data in an object. It should take in a single prop called `data`.


## container 
You will be familiar with the idea of a container from other frameworks.
In our framework, you can wrap elements in a container by using the **container** tag
```<container> </container>```

by default, the container has this width profile
| xs | s | m | l | xl |
|----|---|---|---|----|
| 90%|85%|80%|75%| 70%|

### Options
you can change this by simply passing the option as a prop into the Container tag


### Examples
screenshot of resultant code goes here for both with and without container examples
code example to follow each.

## card 
```<Card> </Card>```
### Options
### Examples

## thumbnail
```<thumbnail/>```
### Options
### Examples

## infoBite
When you have a small chunk of information and a heading to draw to in the reader
The basic mark-up looks like \n
```<InfoBite>
      <h2> heading/title </h2>
      <p> sentance relating to the title or heading </p>
  </InfoBite>
```
### Options
### Examples

# typography

## arctxt 
Make circular text with the arctxt element 
```<Arctxt> text to arc </Arctxt>```

### Options
.radius-<value>
.letter-spacing-<value>
.word-spacing-<value>
.offset-<value>
### Examples

## mirrortxt
Project text onto a mirror.
 ```<mirrortxt> text to apply a mirror effect </mirrortxt>``` 
 By default this will show the unmirrored text, the mirrored text, and a stylised divider
 The 'mirror' will be placed on the right of the text
### Options
  **.mirrored-only** ```<mirrortxt class="mirrored-only">...</mirrortxt>```
    Only shows the mirrored text
  **.no-divider** ```<mirrortxt class="no-divider">...</mirrortxt>```
      removes the stylised divider
  **.left** ```<mirrortxt class="left">...</mirrortxt>```
     places the 'mirror' on the left of the text
  **.top** ```<mirrortxt class="top">...</mirrortxt>```
    places the 'mirror' above the text
  **.bottom** ```<mirrortxt class="bottom">...</mirrortxt>```
      places the 'mirror' on the left of the text
  **.bottom** ```<mirrortxt class="bottom">...</mirrortxt>```
### Examples
a few examples with code reference go here

## reversetxt
reverses text
 ```<Reversetxt> reverse this text </Reversetxt>``` 
By default will reverse the letters
```<Reversetxt>hello world</Reversetxt>``` in browser -> dlrow olleh 
### Options
**.words**  ```<Reversetxt class="words"> reverse this text </Reversetxt>``` 
reverses the words instead
### Examples
   
