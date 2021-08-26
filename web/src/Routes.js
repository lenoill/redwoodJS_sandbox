// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ContactsLayout from 'src/layouts/ContactsLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ContactsLayout}>
        <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
        <Route path="/contacts/{id}/edit" page={ContactEditContactPage} name="editContact" />
        <Route path="/contacts/{id}" page={ContactContactPage} name="contact" />
        <Route path="/contacts" page={ContactContactsPage} name="contacts" />
      </Set>
      <Route path="/blog-post/{id}" page={BlogPostPage} name="blogPost" />
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
