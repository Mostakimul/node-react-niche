import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const FaqPage = () => {
  return (
    <div>
      <MainNavbar />
      <PageTitle title="FAQ" />
      <div className="container md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="col-span-2 md:p-10">
            <h3 className="font-display text-4xl py-5">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 text-lg">
              Here is a list of our top asked questions about olives, olive
              oils, and balsamic vinegar
            </p>
          </div>
          <div className="md:p-10 col-span-4">
            <div>
              <h3 className="font-display text-3xl py-5">
                What does Extra Virgin mean?{' '}
              </h3>
              <p className="text-gray-600 text-lg">
                Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate. Sed eleifend lacus eu sapien
                sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex
                interdum eu. Pellentesque rhoncus lectus sed posuere viverra.
                Vestibulum id turpis lectus. Donec rhoncus quis elit sed
                fermentum.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl py-5">
                Are raw olives poisonous?{' '}
              </h3>
              <p className="text-gray-600 text-lg">
                Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas
                porta mi vestibulum, lobortis est ac, hendrerit dui.
                Pellentesque auctor id enim sit amet molestie. Pellentesque
                auctor id enim sit amet molestie. Nullam sit amet ex enim. Fusce
                nec suscipit nulla. Maecenas porta mi vestibulum, lobortis est
                ac, hendrerit dui. Pellentesque auctor id enim sit amet
                molestie. Pellentesque auctor id enim sit amet.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl py-5">
                How do you cure your olives?{' '}
              </h3>
              <p className="text-gray-600 text-lg">
                Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate. Sed eleifend lacus eu sapien
                sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex
                interdum eu. Pellentesque rhoncus lectus sed posuere viverra.
                Vestibulum id turpis lectus. Donec rhoncus quis elit sed
                fermentum.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl py-5">
                Are dark red olives an other variety olive?{' '}
              </h3>
              <p className="text-gray-600 text-lg">
                Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate. Sed eleifend lacus eu sapien
                sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex
                interdum eu. Pellentesque rhoncus lectus sed posuere viverra.
                Vestibulum id turpis lectus. Donec rhoncus quis elit sed
                fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
