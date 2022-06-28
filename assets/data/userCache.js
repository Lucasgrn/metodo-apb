let userData
export default function getData(props) {  
  userData = {
    name: props.name,
    birth: props.birth,
    sub: props.sub
  }
  return userData
}

export {userData};