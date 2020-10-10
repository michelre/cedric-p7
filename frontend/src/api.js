export const getPosts = () => {

    return new Promise((res) => {
        res([
            { id: 1, title: 'Post 122', likes: 2 },
            { id: 2, title: 'Post 2', likes: 3 },
            { id: 3, title: 'Post 333', likes: 0 },
        ])
    })

}
