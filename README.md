# Vite MERN Stack Ecommerce App

The [live version](https://musicstore-p45e.onrender.com/) uses Render.com.

## Setup and run

Create `.env`, copy the code in `.env.sample` and replace the values with your values. Then run:

```sh
# in frontend:
npm install
# in root:
npm install
npm run dev
```

Then open the app at `http://localhost:5173/`.

You can add custom css in `frontend/src/assets/styles/index.css`. That is the file that has the CSS for the dark theme of this app.

## Seeding the local Database

1. Check the file in the backend called `seeder.js`.
2. Go into root `package.json` add add 2 scripts: `npm run data:import` and `npm run data:destroy`.
3. `node backend/seeder` will run the file but there are 2 functions in it:
   1. to run `destroyData` use `node backend/seeder -d`, and
   2. no `-d` for `importData`

## Code removed

### Test PayPal

This is a function to use for testing to simulate a successful payment followed by the Button jsx:

```js
async function onApproveTest() {
  await payOrder({ orderId, details: { payer: {} } });
  refetch();

  toast.success('Order is paid');
}
```

```jsx
<Button style={{ marginBottom: '10px' }} onClick={onApproveTest}>
  Test Pay Order
</Button>
```

### Edit Reviews

I needed the following code to edit a dummy review I created and that I did not want deployed. It is tied to admin functionality, but it should be a feature for Users:

```jsx
// Add state for the reviews in ProductEdit.jsx:
const [reviews, setReviews] = useState([]);

// create the function for the reviews
function reviewHandler(reviewId) {
  return function ({ target: { value } }) {
    setReviews(
      reviews.map(review => {
        if (review._id === reviewId) {
          return {
            ...review,
            comment: value,
          };
        } else {
          return review;
        }
      })
    );
  };
}

// Finally, add the following JSX:
{
  reviews.length
    ? reviews.map((review, index) => (
        <Form.Group
          key={review._id}
          controlId="review"
          className="edit-form-element"
        >
          <Form.Label>Review {index + 1}</Form.Label>
          <Form.Control
            type="text"
            value={review.comment}
            onChange={reviewHandler(review._id)}
          ></Form.Control>
        </Form.Group>
      ))
    : null;
}
```

Also in ProductEdit.jsx add:

1. `reviews` to `updateProduct` in `submitHandler`
2. In `useEffect` add `setReviews(product.reviews);`.

In `productController.js`:

3. In `updateProduct` add `reviews` to the destructuring of `req.body` and
4. in the conditional add `product.reviews = reviews;`.

## Miscellaneous

...notes here
