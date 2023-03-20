import '../Index-css/Navbar.css'



const CategoryList = ({ categories }) => {
    return (
        <div className='category-list'>
            {categories.map((category) => (
                <div className="category-item">
                    <div className='category-icon'>
                        {category.icon}
                    </div>
                    <div className='category-title'>
                        {category.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;