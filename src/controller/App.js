import React, { useState, useEffect } from 'react';
import { PostModel } from '../models/PostModel';
import PostListView from '../views/PostListView';
import PostDetailView from '../views/PostDetailView';
import PostFormView from '../views/PostFormView';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [formState, setFormState] = useState({ title: '', body: '', userId: 1 });

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const fetchedPosts = await PostModel.fetchPosts();
        setPosts(fetchedPosts);
    };

    const handleSelectPost = async (postId) => {
        const postDetails = await PostModel.fetchPostDetails(postId);
        setSelectedPost(postDetails);
    };

    const handleCreateOrUpdatePost = async () => {
        if (formState.id) {
            await PostModel.updatePost(formState.id, formState);
        } else {
            await PostModel.createPost(formState);
        }
        setFormState({ title: '', body: '', userId: 1 });
        loadPosts();
    };

    const handleDeletePost = async (postId) => {
        await PostModel.deletePost(postId);
        loadPosts();
    };

    return (
        <div>
            <div className="App">
                <h1>React CRUD Application - MVC</h1>
                <PostFormView
                    formState={formState}
                    setFormState={setFormState}
                    onSubmit={handleCreateOrUpdatePost}
                />
                <PostListView
                    posts={posts}
                    onSelect={handleSelectPost}
                    onDelete={handleDeletePost}
                />
                {selectedPost && (
                    <PostDetailView
                        post={selectedPost}
                        onClose={() => setSelectedPost(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>¡Hola Mundo! desde controller</h1>
//     </div>
//   );
// };

// export default App;

