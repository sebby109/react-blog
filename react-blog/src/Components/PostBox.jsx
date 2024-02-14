
import '../Styles/PostBox.css';
import { Image } from 'react-bootstrap';
import generic from '../Images/icons8-customer-50.png';
import heart from '../Images/icons8-heart-64.png';
import comment from '../Images/icons8-comment-64.png';
import repost from '../Images/icons8-repost-64.png';
import { useState } from 'react';

function PostBox(props) {
    let x = "A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information. Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence."
    const [page, setPage] = useState(true);
    function handleClick(){
        if(page){
            setPage(false);
        }
        else {
            setPage(true);
        }

    }

    return (
        <div className="post-parent">
                <Image src={generic} /> 
                <Image className='interact-icons' src={repost} />
                <Image className='interact-icons' src={comment} />
                <Image className='interact-icons' src={heart} />
                <p className='read-more-text'>
                    {
                        x.length > 250 && page ? 
                        (<>
                        {x.slice(0, 250)} 
                        <span onClick={handleClick}> <u>...read more</u></span>
                        </>) 
                        : 
                        (<>{x}
                        <span onClick={handleClick}> <u>...show less</u></span></>)
                    }
                </p>
        </div>
    );
}

export default PostBox;