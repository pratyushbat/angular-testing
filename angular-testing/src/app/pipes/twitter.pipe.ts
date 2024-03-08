import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitter',
})
export class TwitterPipe implements PipeTransform {
  transform(value: string, generate: 'username' | 'url') {
    return generate === 'username'
      ? this.generateUsername(value)
      : this.generateUrl(value);
  }

  private generateUsername(url: string) {
    const username = url.replace(/\/$/, '');
    console.log('generating username');
    return '@' + username.substring(username.lastIndexOf('/') + 1);
  }

  private generateUrl(username: string) {
    return `https://twitter.com/${username?.replace(/@/, '')}`;
  }
}
