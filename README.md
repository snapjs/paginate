# paginate
Simple library to implement pagination of any type of html element.
# Use
The paginate library just requires an `id` for the container of the paginated items, an `id` for the pager (to display links for page 1, 2, 3, 4 etc.), and the number of items to be shown per page.  Each page link in the pager is an `<a>` element with the class `pager-link` and the currently-selected link has the class `pager-link-selected`, enabling fully-customizable styling.
```html
<div id="pager">Page: </div>
<div id="content">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
  <div>Item 10</div>
  <div>Item 11</div>
  <div>Item 12</div>
  <div>Item 13</div>
  <div>Item 14</div>
  <div>Item 15</div>
  <div>Item 16</div>
  <div>Item 17</div>
  <div>Item 18</div>
  <div>Item 19</div>
  <div>Item 20</div>
  <div>Item 21</div>
  <div>Item 22</div>
  <div>Item 23</div>
  <div>Item 24</div>
</div>
<script type="text/javascript" src="paginate.js"></script>
```

```html
<script>
  paginate('content', 'pager', 10);
</script>
```
The package can be included via npm as well.

# The MIT License (MIT)
Copyright © 2017 snapjs

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

