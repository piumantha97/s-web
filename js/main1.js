function loadProducts(category, subcategory) {

    console.log("testing--------------------------------------------------");
    // Fetch data from the JSON file
    $.ajax({
        url: 'products.json', // Path to the JSON file
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            const categoryData = data[category]; // Get category data
            if (!categoryData || !categoryData[subcategory]) {
                alert("No products found for this category!");
                return;
            }

            const products = categoryData[subcategory]; // Get specific subcategory data

            // Clear existing products
            $('#product-container').empty();

            // Generate and append products
            products.forEach(product => {
                const productHtml = `
                <div class="col-lg-4 col-md-6">
                    <div class="product__item">
                        <div class="product__item__pic" style="background-image: url('${product.image}'); height: 300px; background-size: cover;">
                            <ul class="product__hover">
                                <li><a href="javascript:void(0)" class="image-popup" data-image="${product.image}"><span class="arrow_expand"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$${product.price.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            `;
            ;
                $('#product-container').append(productHtml);
            });
        },
        error: function(error) {
            console.error('Error loading products:', error);
        }
    });
      // Reinitialize Magnific Popup for new content
    //   $('.image-popup').magnificPopup({
    //     type: 'image',
    //     closeBtnInside: true,
    //     gallery: {
    //         enabled: true
    //     }
    // });

         // Reinitialize MixItUp after loading products
         if (window.reinitializeMixItUp) {
            window.reinitializeMixItUp();
        }
        
    $('.image-popup').magnificPopup({
        type: 'image'
    });
}
