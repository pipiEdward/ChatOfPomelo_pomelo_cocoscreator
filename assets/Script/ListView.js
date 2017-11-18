cc.Class({
    extends: cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Prefab
        },
        _itemHeight: 40,
        scrollView: {
        	default: null,
        	type: cc.ScrollView
        },
        spawnCount: 0, // how many items we actually spawn
        totalCount: 0, // how many items we need for the whole list
        spacing: 0, // space between each item
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        label: cc.Label,
    },

    // use this for initialization
    onLoad: function () {
    	this.content = this.scrollView.content;
        this.items = []; // array to store spawned items
    // 	this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
    
        // this.scrollView.scrollToBottom();
    },

    // initialize: function () {
    //     var tempItem = cc.instantiate(this.itemTemplate);
    //     this._itemHeight = tempItem.height;
    //     this.content.height = this.totalCount * (this._itemHeight + this.spacing) + this.spacing; // get total content height
    // 	for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
    // 		let item = cc.instantiate(this.itemTemplate);
    // 		this.content.addChild(item);
    // 		item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
    // 		item.getComponent('Item').updateItem(i, i);
    //         this.items.push(item);
    // 	}
    // },
    
    setChat: function (chat) {
        this.chat = chat;
    },
    
    hide: function () {
        this.node.active = false;
    },
    
    show: function () {
        this.node.active = true;
    },
    
    setUsers: function (users) {
        this.users = users;

        this.items = [];
        this.content.removeAllChildren();
        
        var tempItem = cc.instantiate(this.itemTemplate);
        this._itemHeight = tempItem.height;
        
        this.totalCount = users.length;
        this.spawnCount = users.length;
        
        this.content.height = this.totalCount * (this._itemHeight + this.spacing) + this.spacing; // get total content height
    	for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
    		let item = cc.instantiate(this.itemTemplate);
    		this.content.addChild(item);
    		item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
    		var userName = null;
    		if (this.users) {
                userName = this.users[i];
            }
            item.getComponent('Item').setListView(this);
            item.getComponent('Item').updateItem(i, i, userName);
            this.items.push(item);
    	}
    },
    
    clickedItem: function (itemId) {
        cc.log("listView clickedItem() itemId: " + itemId);
        this.chat.chooseUser(itemId);
    },

    getPositionInView: function (item) { // get item position in scrollview's node space
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let buffer = this.bufferZone;
        let isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        let offset = (this._itemHeight + this.spacing) * items.length;
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && items[i].y + offset < 0) {
                    items[i].setPositionY(items[i].y + offset );
                    let item = items[i].getComponent('Item');
                    let itemId = item.itemID - items.length; // update item id
                    var userName = null;
                    if (this.users) {
                        userName = this.users[itemId];
                    }
                    item.updateItem(i, itemId, userName);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
                    items[i].setPositionY(items[i].y - offset );
                    let item = items[i].getComponent('Item');
                    console.log('itemID: ' + item.itemID);
                    let itemId = item.itemID + items.length;
                    var userName = null;
                    if (this.users) {
                        userName = this.users[itemId];
                    }
                    item.updateItem(i, itemId, userName);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
    },

    scrollEvent: function(sender, event) {
        // switch(event) {
        //     case 0: 
        //       this.label.string = "Scroll to Top"; 
        //       break;
        //     case 1: 
        //       this.label.string = "Scroll to Bottom"; 
        //       break;
        //     case 2: 
        //       this.label.string = "Scroll to Left"; 
        //       break;
        //     case 3: 
        //       this.label.string = "Scroll to Right"; 
        //       break;
        //     case 4: 
        //       this.label.string = "Scrolling"; 
        //       break;
        //     case 5: 
        //       this.label.string = "Bounce Top"; 
        //       break;
        //     case 6: 
        //       this.label.string = "Bounce bottom"; 
        //       break;
        //     case 7: 
        //       this.label.string = "Bounce left"; 
        //       break;
        //     case 8: 
        //       this.label.string = "Bounce right"; 
        //       break;
        //     case 9: 
        //       this.label.string = "Auto scroll ended"; 
        //       break;
        // }
    }
});
