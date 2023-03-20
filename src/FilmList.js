import './Films.css'


const FilmList = ({ films }) => {
    return (
        <div className="film-list" >
            {films.map((film) => (
                <div className="film-preview">
                    <h1>{film.title}</h1>
                    <h3>Reżyseria: {film.director}</h3>
                    <h4>{film.translation}</h4>
                    <p>Opis</p>
                    <p>{film.desc}</p>
                    <div className="film-image">
                        <img src={film.img} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilmList;