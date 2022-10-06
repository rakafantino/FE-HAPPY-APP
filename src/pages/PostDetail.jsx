import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";

function PostDetail() {
  const [postDetail, setPostDetail] = useState({});
  const [commentContent, setCommentContent] = useState("");
  const location = useLocation();

  const getPostDetail = async () => {
    const res = await axios.get(`https://tugas.website/feed/${location.state.id}`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    setPostDetail(res.data.Feed);
  };

  const postComment = () => {
    axios
      .post(
        `https://tugas.website/feed/${location.state.id}/comment`,
        {
          text: commentContent,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        getPostDetail();
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <>
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* this can be map able */}
        {postDetail ? (
          <Card className="px-3 my-3 h-100 d-flex">
            <Card.Header as="h5">
              {postDetail.name}{" "}
              <span className="float-end fw-regular fs-5">
                <Moment format="DD-MM-YYYY">{postDetail.date}</Moment>
              </span>
            </Card.Header>
            <Card.Body>
              <Card.Text>{postDetail.text}</Card.Text>
              <hr />

              {postDetail.comments ? (
                <>
                  {postDetail.comments.map((comment) => {
                    return (
                      <Card className="my-3" key={comment.id}>
                        <Card.Text className="px-auto d-block">
                          <span className="float-start fw-regular fs-5 ms-3 mt-2">{comment.name}</span>{" "}
                          <span className="float-end fw-regular fs-5 me-3 mt-2">
                            <Moment format="DD-MM-YYYY">{comment.date}</Moment>
                          </span>
                        </Card.Text>
                        <Card.Body>
                          <Card.Text className="mb-3">{comment.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </>
              ) : (
                <div className="d-flex justify-content-center">
                  <h5>Belum Ada Comment</h5>
                </div>
              )}

              <Form className="d-flex">
                <Form.Control type="text" placeholder="Add a Comment" className="me-2" aria-label="comment" onChange={(e) => setCommentContent(e.target.value)} />
                <Button variant="primary" onClick={postComment}>
                  Comment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default PostDetail;
