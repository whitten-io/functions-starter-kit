export class Application {
  /**
   * Test Method
   *
   * @return {*}  {Promise<string>}
   * @memberof Application
   */
  async invoke(useAlt=false, confuse=false): Promise<string> {
    const options = {
      type: 'global',
      message: 'Hello',
    };

    if(useAlt===true){
      options.message = "Good-Bye"
    }

    if(confuse===true){
      options.message = "huh?"
    }

    console.log(options.message);
    return options.message;
  }
}
