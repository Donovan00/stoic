
function MyComponent() {
    function scrollToImage() {
      const imageElement = document.getElementById('myImage');
      if (imageElement) {
        imageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    return (
      <div>
        <img
          src="https://greekreporter.com/wp-content/uploads/2021/08/School_of_Athens_Credit_Wikipedia_Public_domain.jpg"
          alt="The School of Athens by Raphael"
          className="styled-image"
          onClick={scrollToImage}
        />
      </div>
    );
  }
  
  export default MyComponent;
  