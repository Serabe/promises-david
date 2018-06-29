import paths from  'promises/paths';
import get from 'promises/another-simple-get';

export function init() {
  // The task is to show a list of user and the number of comments their posts have (added up).
  // We are using a fake public api, to ease the pain, I created a package named paths. You
  // get paths like:
  // paths.users(): the path to get a list of users from
  // paths.postsByUser(userId): the posts for the user with id userId
  // paths.commentsForPost(postId): the comments for the post with id postId

  // I also created `get`, a wrapper around `XMLHttpRequest` and gave it a
  // simpler syntax. You can work with it like this:
  // get(url, {
  //   method: HTTPMethod, // By default, this is get
  //   callbacks: { // An object containing callbacks for XHR. You will only need to implement one, but feel free to play with this
  //     load(res): fn // You can access the response as res.responseText
  //
  //   }
  // })

  // For diplaying the information, just use console.log(). It will magically appear
  // in the UI. This function is implemented in another-console, if you want to check it.
  console.log("Hola, mundo");
  console.error("We are all gonna die!");
}
