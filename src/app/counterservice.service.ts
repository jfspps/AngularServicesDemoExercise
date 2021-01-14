export class CounterService{
    activeClicks: number = 0;
    inactiveClicks: number = 0;

    onMakeActive(){
        this.activeClicks++;
        console.log('Number of active clicks so far: ' + this.activeClicks)
    }

    onMakeInactive(){
        this.inactiveClicks++;
        console.log('Number of inactive clicks so far: ' + this.inactiveClicks)
    }
}