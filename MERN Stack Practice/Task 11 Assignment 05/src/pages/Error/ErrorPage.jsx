import { Link } from 'react-router';
import '../Error/style.css'

export default function ErrorPage({title, des}) {
  return (
    <div className='px-20'>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center font-bold text-2xl">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2 text-xl">{title}</h3>

                  <p className='text-lg'>{des}</p>

                  <Link to='/' className="link_404 rounded-2xl">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
