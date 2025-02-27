import { Component, h, AttachInternals, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
  formAssociated: true,
})
export class MyInput {
  @AttachInternals() internals: ElementInternals;

  @Prop() value: string;

  private input: HTMLInputElement;

  private handleOnInput = () => {
    this.value = this.input.value;
    this.setFormValue();
  };

  private handleOnChange = () => {
    this.value = this.input.value;
    this.setFormValue();
  };

  private setFormValue = () => {
    console.log('setformvalue', this.internals);
    console.log('iterator-1');
    this.internals?.setFormValue(this.value);
  };

  render() {
    return (
      <input
        ref={(el) => (this.input = el)}
        onChange={this.handleOnChange}
        onInput={this.handleOnInput}
      />
    );
  }
}
