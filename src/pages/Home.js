import React from 'react'

function Home() {
  return (
    <>
    <div className="header__herosection">
          <h2 className="header__title">Upload find and enjoy the servive</h2>
          <h4 className="header__slogan">Join us and enjoy the chasm </h4>

          <div className="header__buttons header__buttons--herosection">
            <button className="header__signin header__signin--fullyrounded">Search doc</button>
            <button className="header__register header__register--fullyrounded">
             Join Us
            </button>
          </div>
        </div>


        <section className="search">
            <h3 className="search__title">How to Search</h3>
            <p class="search__description">UBI allows you to upload the details of your lost document and search it for you in 
just 3 easy and quick ways </p>

<div className="search__steps">
    <article className="search__card">
        <div className="search__header">
            <img />
            <h6>Details</h6>
        </div>
        <p className="search__paragraph">User insert full details of the lost 
document or a card.</p>
    </article>
</div>
        </section>

        </>
  )
}

export default Home