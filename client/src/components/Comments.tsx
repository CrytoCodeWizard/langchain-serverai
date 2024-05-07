import React from 'react';

const Comments: React.FC = () => {
    return (
        <div className="my-4">
            <textarea
                className='form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm'
                rows={3}>
            </textarea>
        </div>
    )
}

export default Comments;