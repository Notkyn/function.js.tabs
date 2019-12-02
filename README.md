# Tabs
Tabs for switching content.
## How to use:
- **creating:**
```javascript
import { Tabs } from './script';
const tabs = new Tabs('info');
```
**`info`** - tabs container class, default value **`info`**
- **layout structure:**
```html
<div class="key">
    <div class="key-header">
        <div class="key-header-tab">Tab_1</div>
    	<div class="key-header-tab">Tab_2</div>
        <div class="key-header-tab">...</div>
    	<div class="key-header-tab">Tab_N</div>
    </div>
    <div class="key-tabcontent">
        ... content for tab_1 ...
    </div>
    ......
    <div class="key-tabcontent">
        ... content for tab_N ...    
    </div>
</div>
```
**`key`** - key class, set to the common container of tabs (_example: `info`_), used to define nested containers

**`${key}-header`** - tabs switches block class (_example: `info-header`_)

**`${key}-header-tab`** - tab switch class (_example: `info-header-tab`_)

**`${key}-tabcontent`** - content class (_example: `info-tabcontent`_)

**`N`** - index of switches and content blocks.  The index of the active switch shows content under the same index.
- **css:**

style.css must have classes:
```css
    .hide: display: none
    .show: display: flex
```
- **run:**   
```javascript
tabs.apply();
```
