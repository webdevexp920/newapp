const ItemList = props => (
  <ul class="item-list">
    {
      itemLists.map(item => {
        <li>
          <div class="image"><img src="images/icon-7.svg" width="69" height="74" alt="image description" onerror="this.onerror=null; this.src='images/ion-7.png'" /></div>
          <h2 class="title">Choose project</h2>
        </li>
      })
    }
  </ul>
)

export default ItemList