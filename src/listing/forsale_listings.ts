import {Component, Input} from '@angular/core';

@Component({
	selector: 'forsale-listings',
	template: `
		<h3>for sale listings</h3>
		<table class="table">
			<tr>
				<td><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png" width="30px"></td>
				<td>1035 poplar street</td>
			</tr>
			<tr>
				<td><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png" width="30px"></td>
				<td>6535 spruce street</td>
			</tr>
			<tr>
				<td><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png" width="30px"></td>
				<td>8726 maple street</td>
			</tr>
		</table>
	`
})
export class ForsaleListingsCmp {
	@Input() text: string;
}
