import '../Index-css/Navbar.css'
import { Link } from 'react-router-dom';


const CategoryList = ({ categories }) => {
    return (
        <div className='category-list'>
            {categories.map((category) => (
                <div key={category.id} className="category-item">
                    <Link to={category.link}>
                    <div className='category-icon'>
                        {category.icon}
                    </div>
                    <div className='category-title'>
                        {category.title}
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;