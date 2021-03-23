import React from "react"; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//importing bootstrap componets 
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
  useRouteMatch
} from 'react-router-dom'; 

export default function app() {
  const posts = [
    {
      id:1, 
      title:"my first Post!",
      date:"4-7-2020", 
      content:"this is my first post."
    }, 
    {
      id:2, 
      title:"Another post",
      date:"4-8-2020", 
      content:"my made another post, maybe ill post more."
    }, 
    {
      id:3, 
      title:"Another another post",
      date:"4-9-2020", 
      content:"this is some info you might want to know about."
    }
  ]; 

  return(
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/home">Home</Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/friends">Friends</Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline-secondary">
            <Link to="/posts">Posts</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path="/posts">
              <Posts posts={posts} />
            </Route>
            <Route path="/friends">
              <Friends names={["jarred","Tessa"]} /> 
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )

}


function Home() {
 return <h2>home</h2>
}

function Friends(props) {
  const {names} = props; 
  return (
    <div>
      <ul>
        {names.map((friend,index)=>(
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  )
}

function Posts({posts}) {
  const match = useRouteMatch(); 
  const FindPostbyID = (id) => 
    posts.filter((posts)=> posts.id == id)[0]; 

  return (
    <div>
      <h2>Posts</h2>
     
        {
          posts.map((post,index)=>{
            return (
            <Alert key={index} variant="primary">
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </Alert> )
          })
        }
      
      <Switch>
        <Route path={`${match.path}/:postId`}
        render={(props)=> (
          <Post
          {...props}
          data={FindPostbyID(props.match.params.postId)}
          />
        )}
        />
        <Route path={match.path}>
          <h3>please slect post</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Post(props) {
  const {data} = props
  //all this dose is check to make sure the data click is a real post. 
  return data == undefined ? <h4>404 Not Found</h4> :
  (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  )
}