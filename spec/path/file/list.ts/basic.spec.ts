import FileList from "../../../../dist/path/file/list";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let std = new FileList(['root','parent','child', 'file.ext'], '/', '/\\:');

describe('check integrity', ()=>{

    it('delimiter', ()=>{
        expect(std.delimiter).toBe('/');
    });

    it('delimiters', ()=>{
        expect(std.delimiters).toBe('/\\:');
    });

    it('dir', ()=>{
        expect(std.directory).toBe('root/parent/child');
    });

    it('file', ()=>{
        expect(std.file).toBe('file.ext');
    });

    it('name', ()=>{
        expect(std.name).toBe('file');
    });

    it('extension', ()=>{
        expect(std.extension).toBe('ext');
    });

    it('value', ()=>{
        expect([...std]).toEqual(['root','parent','child','file.ext']);
    });

    it('path', ()=>{
        expect(std.toString()).toBe('root/parent/child/file.ext');
    });

});

it('add path', ()=>{
    std.push('file.ext')
    expect(std.toString()).toBe('root/parent/child/file.ext/file.ext');
});

it('prepend add', ()=>{
    std.unshift('prepend')
    expect(std.toString()).toBe('prepend/root/parent/child/file.ext/file.ext');
});
